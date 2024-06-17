import { useState } from 'react';

/* eslint-disable react/prop-types */
export function TwitterFollowCard({ children,formatUserName,userName = 'unknow', avatarUrl, initialIsFollowing }){
  const [isFollowing, setIsFollowing] =useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  // change style too
  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          alt="El avatar de midudev" 
          src={avatarUrl}
          className='tw-followCard-avatar' 
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUsername'>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}