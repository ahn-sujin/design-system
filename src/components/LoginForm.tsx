import { useState } from "react";
import DefaultTextField from "./DefaultTextField";
import Label from "./Label";
import PrimaryButton from "./PrimaryButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        <Label htmlFor="email">이메일</Label>
        <DefaultTextField
          id="email"
          errorMessage="이메일을 확인해주세요"
          iconPath="/icons/ic_delete_dark.svg"
          iconAlt="delete"
          onIconClick={() => setEmail("")}
          placeholder="이메일을 입력해주세요"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          isError={false}
        />
      </div>
      <div>
        <Label htmlFor="password">비밀번호</Label>
        <DefaultTextField
          id="password"
          errorMessage="비밀번호를 확인해주세요"
          iconPath="/icons/ic_delete_dark.svg"
          iconAlt="delete"
          onIconClick={() => setPassword("")}
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          isError={false}
        />
      </div>
      <div className="mt-[16px]">
        <PrimaryButton
          onClick={() => {}}
          isDisabled={!email || !password}
          theme="dark"
        >
          로그인
        </PrimaryButton>
      </div>
    </div>
  );
}
