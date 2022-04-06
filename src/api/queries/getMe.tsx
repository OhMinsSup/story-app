import { useQuery } from 'react-query';

import { api } from '@api/module';

import { API_ENDPOINTS } from '@constants/constant';

import type { QueryFunctionContext, QueryKey } from 'react-query';
import type { Schema, StoryErrorApi, UserModel } from '@api/schema/story-api';
import { useUserHook } from '@store/hook';

export const fetchMe = async (_: QueryFunctionContext<QueryKey, any>) => {
  const response = await api.get({
    url: API_ENDPOINTS.LOCAL.USER.ME,
  });
  return response.data.result;
};

export const useMeQuery = () => {
  const { setAuth, userInfo, isLoggedIn } = useUserHook();

  const enabled = !userInfo && isLoggedIn;

  const { data, ...fields } = useQuery<UserModel, StoryErrorApi<Schema>>(
    [API_ENDPOINTS.LOCAL.USER.ME],
    fetchMe,
    {
      enabled,
      retry: false,
      initialData: userInfo ?? undefined,
      onSuccess: (data) => setAuth?.(data),
    },
  );

  return {
    userInfo: userInfo ?? data,
    fetchMe,
    ...fields,
  };
};