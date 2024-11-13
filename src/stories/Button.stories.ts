import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../components/Button";

const meta = {
  title: "Basic/Button", // 경로
  component: Button, // 해당 컴포넌트
  parameters: {
    layout: "centered", // 컴포넌트 위치
  },
  tags: ["autodocs"],
  argTypes: {
    primary: { control: "boolean", description: "버튼의 타입" },
    backgroundColor: { control: "color", description: "버튼 배경색" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
