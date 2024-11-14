import { useState } from "react";

import Label from "./components/Label";
import DefaultTextField from "./components/DefaultTextField";

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[8px] items-start">
        <Label htmlFor="username">이름</Label>
        <DefaultTextField
          id="username"
          value=""
          placeholder="이름을 입력해주세요"
          errorMessage="이름을 확인해주세요"
          isError={isError}
          iconPath="/icons/ic_delete_dark.svg"
          iconAlt="delete"
          onChange={() => {}}
          onIconClick={() => {}}
        />
      </div>
      <div className="flex flex-col gap-[8px] items-start">
        <Label htmlFor="email">이메일</Label>
        <DefaultTextField
          id="email"
          value=""
          placeholder="이메일을 입력해주세요"
          errorMessage="이메일을 확인해주세요"
          isError={isError}
          iconPath="/icons/ic_delete_dark.svg"
          iconAlt="delete"
          onChange={() => {}}
          onIconClick={() => {}}
        />
      </div>
      <button onClick={() => setIsError(!isError)}>제출</button>
    </div>
  );
}

export default App;
