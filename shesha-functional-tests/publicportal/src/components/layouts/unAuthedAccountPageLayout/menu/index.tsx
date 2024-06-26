import { MenuOutlined } from "@ant-design/icons";
import {
  SidebarMenu,
  useConfigurableActionDispatcher,
  IConfigurableActionConfiguration,
  useApplicationContext,
  useSidebarMenu,
} from "@shesha-io/reactjs";
import { Button, Menu } from "antd";
import React, { FC, useState } from "react";
import ShaMenuDrawer from "../menuDrawer/index";
import { useStyles } from "./styles";

interface IProps {}

export const LayoutMenu: FC<IProps> = () => {
  const { styles } = useStyles();

  const [{ open }, setState] = useState({ open: false });
  const onClick = () => setState((s) => ({ ...s, open: true }));
  const onClose = () => setState((s) => ({ ...s, open: false }));

  const { executeAction } = useConfigurableActionDispatcher();
  const executionContext = useApplicationContext();
  const { getItems, isItemVisible } = useSidebarMenu();
  const items = getItems();

  const onButtonClick = (
    itemId: string,
    actionConfiguration: IConfigurableActionConfiguration
  ) => {
    executeAction({
      actionConfiguration: actionConfiguration,
      argumentsEvaluationContext: executionContext,
    });
  };

  const menuItems = items.map((item) =>
    SidebarMenu.sidebarItemToMenuItem({
      item,
      isItemVisible,
      onButtonClick,
      isRootItem: true,
    })
  );

  return menuItems.length <= 30 ? (
    <Menu className={styles.shaMenu} mode="horizontal" items={menuItems} />
  ) : (
    <>
      <Button type="link" icon={<MenuOutlined />} onClick={onClick} />
      <ShaMenuDrawer items={menuItems} open={open} onClose={onClose} />
    </>
  );
};
