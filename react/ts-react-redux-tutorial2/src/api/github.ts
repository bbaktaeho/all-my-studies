/**
 * * api 를 작성할 때
 * ? api 결과로 나오는 타입을 준비
 * ? axios api 호출 함수도 만들어줌 -> 제네릭으로 타입을 명시
 */

import axios from 'axios';

export async function getUserProfile(username: string) {
  const response = await axios.get<GithubProfile>(`https://api.github.com/users/${username}`);
  return response.data;
}

export type GithubProfile = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
};
