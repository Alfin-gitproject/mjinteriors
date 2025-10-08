"use client";
import navigation from "@/data/navigation";
import { isParentActive } from "@/lib/is-menu-active";
import { toggleSidebar } from "@/redux/features/toggles/toggleSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";

const sidebarRules = {
  hide: ["Team", "Blog"], // Hide Team and Blog globally at all levels
  Home: {
    hideAll: true, // Remove dropdown for Home
  },
  Pages: {
    hide: ["Portfolio", "Product", "Products", "Product section","Testimonial"], // Hide these
    Utilities: {
      showOnly: ["FAQ"], // Only show FAQ under Utilities
    },
  },
};

function applyRules(parentLabel, children = []) {
  if (!children.length) return [];
  const rules = sidebarRules[parentLabel] || {};
  let out = [...children];

  // Apply global hide rule
  if (sidebarRules.hide?.length) {
    out = out.filter((c) => !sidebarRules.hide.includes(c.label));
  }

  // Apply parent-specific rules
  if (rules?.showOnly?.length) {
    out = out.filter((c) => rules.showOnly.includes(c.label));
  }
  if (rules?.hide?.length) {
    out = out.filter((c) => !rules.hide.includes(c.label));
  }
  if (rules?.hideAll) return [];

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

  // Update navigation data to set Home 1 as default
  const updatedNavigation = navigation.map((item) =>
    item.label === "Home" ? { ...item, url: "/" } : item
  );

  // Apply global hide rule to top-level items
  const filteredNavigation = applyRules("", updatedNavigation);

  const renderItems = (items, parentLabel = "") =>
    items?.map((item, i) => {
      if (item?.dropdown) {
        const filtered = applyRules(parentLabel || item.label, item.dropdown);

        // If nothing left after filtering, render parent as a simple item (if it has url) or skip
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
          <Image height={30} width={172} src="/image/logo1.png" alt="logo" />
        </Link>
      </div>

      <Sidebar>
        <Menu>{renderItems(filteredNavigation)}</Menu>
      </Sidebar>
    </div>
  );
}