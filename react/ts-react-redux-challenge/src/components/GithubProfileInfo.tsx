import React from 'react';
import './GithubProfileInfo.css';
type GithubProfileInfoProps = {
  name: string;
  bio: string;
  img: string;
  blog: string;
};

export default function GithubProfileInfo({ name, bio, img, blog }: GithubProfileInfoProps) {
  return (
    <div className="GithubProfileInfo">
      <div className="head">
        <img src={img} alt={name} />
        <p>{name}</p>
      </div>
      <div className="content">
        {bio === '' ? null : <p>{bio}</p>}
        {blog === '' ? null : <a href={blog}>블로그</a>}
      </div>
    </div>
  );
}
