import { Profile } from 'components/Profile/Profile';
import { StatisticsList } from 'components/Statistics/StatisticsList';
import { FriendList } from 'components/FriendList/FriendList';
import userJson from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userJson.username}
        tag={userJson.tag}
        location={userJson.location}
        avatar={userJson.avatar}
        followers={userJson.stats.followers}
        views={userJson.stats.views}
        likes={userJson.stats.likes}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
