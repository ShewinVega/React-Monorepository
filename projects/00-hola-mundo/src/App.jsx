import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';


export function App() {

  const format = (userName) => `@${userName}`;
  // const formattedUserName = <span>@Dombuldor</span>;

  const users = [
    {
      userName: 'minino',
      name: 'LordCat',
      isFollowing: true,
      avatarUrl: "https://t3.ftcdn.net/jpg/06/28/87/16/360_F_628871677_osiZxakMxZXJ0fzJur30hJyo9IaEFKZ3.jpg" 
    },
    {
      userName: 'androide17',
      name: 'Elon Musk',
      isFollowing: false,
      avatarUrl: "https://hips.hearstapps.com/hmg-prod/images/musk-weed-1536332069.jpg?crop=0.502xw:1.00xh;0.356xw,0&resize=1200:*"
    },
    {
      userName: 'androide18',
      name: 'Elon Musk',
      isFollowing: false,
      avatarUrl: "https://hips.hearstapps.com/hmg-prod/images/musk-weed-1536332069.jpg?crop=0.502xw:1.00xh;0.356xw,0&resize=1200:*"
    },
  ];

  return (
    <section className='App'>

      {
        users.map(({ userName, name, isFollowing, avatarUrl }) => (
            <TwitterFollowCard  
              key={userName}
              formatUserName={format}
              initialIsFollowing={isFollowing}
              userName={userName} 
              avatarUrl={avatarUrl}
            > {name} </TwitterFollowCard>
          ))
      }
    </section>
  );
}