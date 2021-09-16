import SidebarRow from "./SidebarRow";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeOutlinedIcon} title="Home" />
      <SidebarRow Icon={ExploreOutlinedIcon} title="Explore" />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
