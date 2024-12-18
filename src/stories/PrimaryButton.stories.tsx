import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Button/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      control: { type: "select", options: ["dark", "light", "social", "text"] },
      description: "버튼 테마",
      table: {
        type: { summary: '"dark" | "light" | "social" | "text"' }, // 요약 제공
        defaultValue: { summary: '"dark"' }, // 기본값 표시
      },
    },
    children: { control: "text", description: "버튼 텍스트" },
    isDisabled: { control: "boolean", description: "버튼 비활성화 여부" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: "dark",
    isDisabled: false,
    children: "Button",
  },
};

export const Light: Story = {
  args: {
    theme: "light",
    isDisabled: false,
    children: "Button",
  },
};

export const Social: Story = {
  args: {
    theme: "social",
    isDisabled: false,
    children: "Button",
  },
};

export const Text: Story = {
  args: {
    theme: "text",
    isDisabled: false,
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    theme: "dark",
    isDisabled: true,
    children: "Button",
  },
};
