"use client";
import navigation from "@/data/navigation";
import { isParentActive } from "@/lib/is-menu-active";
import { toggleSidebar } from "@/redux/features/toggles/toggleSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";

// ✅ Control here which children to show/hide per parent label
const sidebarRules = {
  Home: {
    showOnly: ["Home 1"], // only this child under Home
    limit: 1,             // hard cap of 1 child
  },
  Pages: {
    hide: ["Portfolio", "Product", "Products", "Product section"], // hide these
    Utilities: {
      showOnly: ["FAQ"], // Only show FAQ under Utilities
    },
  },
};

function applyRules(parentLabel, children = []) {
  if (!children.length) return [];
  const rules = sidebarRules[parentLabel] || {};
  let out = [...children];

  if (rules?.showOnly?.length) {
    out = out.filter((c) => rules.showOnly.includes(c.label));
  }
  if (rules?.hide?.length) {
    out = out.filter((c) => !rules.hide.includes(c.label));
  }
  if (rules?.hideAll) return [];
  if (typeof rules?.limit === "number") {
    out = out.slice(0, rules.limit);
  }

  // Apply nested rules to children with dropdowns
  return out.map((item) => {
    if (item.dropdown?.length) {
      const nestedRules = sidebarRules[parentLabel]?.[item.label] || {};
      return {
        ...item,
        dropdown: applyRules(item.label, item.dropdown).filter((c) =>
          nestedRules.showOnly ? nestedRules.showOnly.includes(c.label) : true
        ),
      };
    }
    return item;
  });
}

export default function SidebarNavigation() {
  const { isSidebarActive } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const path = usePathname();

  const onNav = () => dispatch(toggleSidebar());

  const renderItems = (items, parentLabel = "") =>
    items?.map((item, i) => {
      if (item?.dropdown) {
        const filtered = applyRules(parentLabel || item.label, item.dropdown);

        // if nothing left after filtering, render parent as a simple item (if it has url) or skip
        if (filtered.length === 0) {
          return item.url ? (
            <MenuItem
              key={`${item.label}-${i}`}
              className={path === item.url ? "ui-nav-active2" : ""}
              component={<Link href={item.url} onClick={onNav} />}
            >
              {item.label}
            </MenuItem>
          ) : null;
        }

        return (
          <SubMenu
            key={`${item.label}-${i}`}
            label={item.label}
            className={isParentActive(item, path) ? "ui-nav-active2" : ""}
          >
            {renderItems(filtered, item.label)}
          </SubMenu>
        );
      }

      return (
        <MenuItem
          key={`${item.label}-${i}`}
          className={item.url === path ? "ui-nav-active2" : ""}
          component={<Link href={item.url} onClick={onNav} />}
        >
          {item.label}
        </MenuItem>
      );
    });

  return (
    <div className={`sidebar-menu ${isSidebarActive ? "active" : ""}`}>
      <div className="sidebar-logo">
        <Link href="/">
          <Image height={30} width={172} src="image/logo-dark.svg" alt="logo" />
        </Link>
      </div>

      <Sidebar>
        <Menu>{renderItems(navigation)}</Menu>
      </Sidebar>
    </div>
  );
}