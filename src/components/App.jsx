import { Profile } from 'components/Profile/Profile';
import userJson from 'user.json';

export const App = () => {
  console.log(userJson);
  return (
    <Profile
      username={userJson.username}
      tag={userJson.tag}
      location={userJson.location}
      avatar={userJson.avatar}
      followers={userJson.stats.followers}
      views={userJson.stats.views}
      likes={userJson.stats.likes}
    />
  );
};
