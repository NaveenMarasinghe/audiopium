import "./playbar.css";
import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useUser } from "../../context/userContext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

type Props = {
  song: Song | null;
};

type Song = {
  name: string;
  description: string;
  image: string;
  song: string;
  id: number;
};

export default function Playbar({ song }: Props) {
  const [account, setAccount] = React.useState(null);
  const { userCTX, connectWalletCTX } = useUser();

  return (
    <div className="playbarContainer">
      <div className="playbarContent">
        <div className="playbarLeft">
          <div className="playbarSongTitle text-white">{song?.name}</div>
        </div>
        <div className="playbarCenter">
          <SkipPreviousIcon
            sx={{ fontSize: 40 }}
            className="hover:cursor-pointer m-2 text-white hover:opacity-50"
          />
          <div className="playbarPlayButton">
            <PlayCircleIcon
              sx={{ fontSize: 60 }}
              className="hover:cursor-pointer text-white"
            />
          </div>
          <SkipNextIcon
            sx={{ fontSize: 40 }}
            className="hover:cursor-pointer m-2 text-white"
          />
        </div>
        <div className="playbarRight"></div>
      </div>
    </div>
  );
}
