import { addCorsHeaders } from 'lib/cors';
import { getAppAccessToken, getDiscussionCategories } from 'lib/services/github';
import { ICategories, IError } from 'lib/types/adapter';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function DiscussionCategoriesApi(
  req: NextApiRequest,
  res: NextApiResponse<ICategories | IError>,
) {
  addCorsHeaders(req, res);

  const params = { repo: req.query.repo as string };
  const result = { repositoryId: '', categories: [] };

  let token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) {
    try {
      token = await getAppAccessToken(params.repo);
    } catch (error: any) {
      res.status(403).json({ error: error.message });
      return;
    }
  }

  const response = await getDiscussionCategories(params, token);

  if ('message' in response) {
    res.status(500).json({ error: response.message });
    return;
  }

  const {
    data: {
      search: { nodes: repositories },
    },
  } = response;

  const repository = repositories[0];
  if (!repository) {
    res.status(404).json(result);
    return;
  }

  const {
    id: repositoryId,
    discussionCategories: { nodes },
  } = repository;
  // @ts-expect-error
  const categories = nodes.map(({ emojiHTML, ...rest }) => ({
    emoji: emojiHTML?.match(/">(.*?)<\/g-emoji/)?.[1] || '',
    ...rest,
  }));

  res.status(200).json({ repositoryId, categories });
}
