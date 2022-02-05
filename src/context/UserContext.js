import React, { useState, createContext } from "react";
import Users from "../pages/Users";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([
    {
      id: 1,
      username: "uponpassive",
      profileURL: "https://images2.imgbox.com/0b/bc/osNC6GCT_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 90,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 2,
      username: "glaziermediocre",
      profileURL: "https://images2.imgbox.com/b7/b1/O6ur4UDY_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 233,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 3,
      username: "descentbackstay",
      profileURL: "https://images2.imgbox.com/93/45/GOJOQroq_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 434,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 4,
      username: "fletchingminer",
      profileURL: "https://images2.imgbox.com/21/20/Qn776ERJ_o.jpeg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 32,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 5,
      username: "blurtshyster",
      profileURL: "https://images2.imgbox.com/0b/bc/osNC6GCT_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 89,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 6,
      username: "trackouthaul",
      profileURL: "https://images2.imgbox.com/30/06/rhPzqKoF_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 200,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 7,
      username: "specificpair",
      profileURL: "https://images2.imgbox.com/0b/bc/osNC6GCT_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 100,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 8,
      username: "birthdaynativity",
      profileURL: "https://images2.imgbox.com/b3/cb/RS7EalSu_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 99,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 9,
      username: "poinsettiademocrat",
      profileURL: "https://images2.imgbox.com/0b/bc/osNC6GCT_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 87,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 10,
      username: "neverthorns",
      profileURL: "https://images2.imgbox.com/60/48/nmGOxy1U_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 233,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 11,
      username: "sillycycling",
      profileURL: "https://images2.imgbox.com/e4/79/F8vkmw4I_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 98,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 12,
      username: "crownslice",
      profileURL: "https://images2.imgbox.com/09/ef/ZqXGR7Fx_o.png",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 28,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 13,
      username: "yawningcomposed",
      profileURL: "https://images2.imgbox.com/0b/bc/osNC6GCT_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 1,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 14,
      username: "totallyactual",
      profileURL: "https://images2.imgbox.com/6e/bb/b53D6yIM_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 54,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 15,
      username: "oilybozo",
      profileURL: "https://images2.imgbox.com/78/e7/TJ2Ibrza_o.png",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 89,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 16,
      username: "cabinetjournal",
      profileURL: "https://images2.imgbox.com/34/ba/QM06LcnO_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 76,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 17,
      username: "rashnun",
      profileURL: "https://images2.imgbox.com/ed/b6/bCXfUGUv_o.png",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 45,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 18,
      username: "sensitiveexample",
      profileURL: "https://images2.imgbox.com/d5/31/3qp9QNtG_o.png",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 21,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 19,
      username: "animalearnings",
      profileURL: "https://images2.imgbox.com/b3/cb/RS7EalSu_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 98,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 20,
      username: "pigletpanel",
      profileURL: "https://images2.imgbox.com/e4/79/F8vkmw4I_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 64,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 21,
      username: "fatherlyaustere",
      profileURL: "https://images2.imgbox.com/0b/bc/osNC6GCT_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 19,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 22,
      username: "unwrapgratified",
      profileURL: "https://images2.imgbox.com/7c/b5/9LH5SUow_o.png",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 78,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 23,
      username: "skicandlelight",
      profileURL: "https://images2.imgbox.com/0b/bc/osNC6GCT_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 43,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 24,
      username: "axiomaticslender",
      profileURL: "https://images2.imgbox.com/60/48/nmGOxy1U_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 65,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
    {
      id: 24,
      username: "eoincarrick",
      profileURL: "https://images2.imgbox.com/e4/79/F8vkmw4I_o.jpg",
      codeSpace: {
        GitHub: "https://images2.imgbox.com/c8/6b/8G8QpT4D_o.png",
        GitLab: "https://images2.imgbox.com/a5/64/rIIRtsgL_o.png",
        GitBucket: "https://images2.imgbox.com/a2/c2/TxTyIT3e_o.png",
        CodePen: "https://images2.imgbox.com/5d/89/sGWApi2K_o.png",
      },
      Repositories: 12,
      logIcon: {
        file: "https://images2.imgbox.com/31/9c/fsU35Bj0_o.png",
        key: "https://images2.imgbox.com/15/24/xq6rB1kk_o.png",
        calander: "https://images2.imgbox.com/31/05/TPN0Mqit_o.png",
      },
    },
  ]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
