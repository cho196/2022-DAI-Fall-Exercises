import { Button, Loader } from "semantic-ui-react";
import LoginForm from "../comps/LoginForm";
//router and states are mostly used in the page for data/information state managements
import { useRouter } from "next/router";

import { useState } from "react";

export default function Home() {
  const r = useRouter();
  const [loginState, setLoginState] = useState("before");
  var c = "blue";
  var btn_txt = "Click Me";
  if (loginState === "before") {
    c = "blue";
    btn_txt = "Login";
  }
  if (loginState === "during") {
    c = "green";
    btn_txt = "Logging in..";
  }
  if (loginState === "after") {
    c = "grey";
    btn_txt = "Success";
  }

  // const HandleButton = () => {
  //   if (loginState === "before") {
  //     setLoginState("during");
  //   }
  //   if (loginState === "during") {
  //     setLoginState("after");
  //   }
  //   if (loginState === "after") {
  //     r.push("/dashboard");
  //   }
  // };

  const Login = async () => {
    setLoginState("during");

    //it's going to take time
    //mock of the time passing => this code is useless, it doesn't do anything
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoginState("after");

    //it's going to stall for 1-2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    r.push("/dashboard");
  };

  return (
    <div>
      {/* <Button color={c} onClick={() => Login()}>
        {btn_txt}
        {loginState === "during" && <Loader active></Loader>}
      </Button> */}
      <LoginForm loginState={loginState} onLoginCLick={() => Login()} />
    </div>
  );
}
