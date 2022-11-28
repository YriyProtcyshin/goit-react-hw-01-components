import { Profile } from 'components/Profile/Profile';
import { StatisticsList } from 'components/Statistics/StatisticsList';
import userJson from 'user.json';
import data from 'data.json';

export const App = () => {
  console.log(userJson);
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
    </>
  );
};
