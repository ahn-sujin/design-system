import type { Meta, StoryObj } from "@storybook/react";

import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
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
    isDark: {
      control: "boolean",
      description: "다크모드 여부",
    },
    isShowBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
    },
    isShowCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
    },
    isShowTitle: {
      control: "boolean",
      description: "페이지 이름 표시 여부",
    },
    title: {
      control: "text",
      description: "페이지 타이틀",
    },
    onBackButtonClick: {
      action: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCloseButtonClick: {
      action: "clicked",
      description: "닫기 버튼 클릭 이벤트",
    },
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isShowBackButton: true,
    isShowCloseButton: true,
    isShowTitle: true,
    isDark: false,
    title: "타이틀",
  },
};
