import TuneOutLinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutLinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars.githubusercontent.com/u/45930992?v=4"
        channel="Modern Web"
        verified
        subs="100K"
        noOfVideos={30}
        description="Best Channel for Tech dgsjahkgkadsgfaljfgsdjkfgdsjkfg ds fusgkjfadskjgf ds fksgfgaskjf adskfssdgas djagsdcbsdj cbds gajksdbajfg "
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want coding for free"
        timestamp="59 seconds ago"
        channel="Modern Web"
        title="Let's build a clone"
        image="https://avatars.githubusercontent.com/u/45930992?v=4"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want coding for free"
        timestamp="59 seconds ago"
        channel="Modern Web"
        title="Let's build a clone"
        image="https://avatars.githubusercontent.com/u/45930992?v=4"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want coding for free"
        timestamp="59 seconds ago"
        channel="Modern Web"
        title="Let's build a clone"
        image="https://avatars.githubusercontent.com/u/45930992?v=4"
      />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want coding for free"
        timestamp="59 seconds ago"
        channel="Modern Web"
        title="Let's build a clone"
        image="https://avatars.githubusercontent.com/u/45930992?v=4"
      />
    </div>
  );
}

export default SearchPage;
