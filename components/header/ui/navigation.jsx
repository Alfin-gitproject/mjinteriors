"use client";
import navigation from "@/data/navigation";
import { isParentActive } from "@/lib/is-menu-active";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navRules = {
  hide: ["Team", "Blog"], // Hide Team and Blog globally at all levels
  Home: {
    hideAll: true, // Remove dropdown for Home
  },
  Pages: {
    hide: ["Portfolio", "Product", "Products", "Product section", "Team","Testimonial"], // Hide Team under Pages (redundant but kept for clarity)
    Utilities: {
      showOnly: ["FAQ"], // Only show FAQ under Utilities
    },
  },
};

function applyRules(parentLabel, children = []) {
  if (!Array.isArray(children) || !children.length) return [];
  const rules = navRules[parentLabel] || {};
  let out = [...children];

  // Apply global hide rule
  if (navRules.hide?.length) {
    out = out.filter((c) => !navRules.hide.includes(c.label));
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
      const nestedRules = rules[item.label] || {};
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

export default function Navigation() {
  const path = usePathname();

  // Update navigation data to set Home 1 as default
  const updatedNavigation = navigation.map((item) =>
    item.label === "Home" ? { ...item, url: "/" } : item
  );

  // Apply global hide rule to top-level items
  const filteredNavigation = applyRules("", updatedNavigation);

  return (
    <ul className="site-menu-main">
      {filteredNavigation?.map((item, i) => {
        const hasDropdown = !!item?.dropdown?.length;
        const lvl1Children = hasDropdown ? applyRules(item.label, item.dropdown) : [];

        return (
          <li key={i} className={`nav-item ${hasDropdown && lvl1Children.length > 0 ? "nav-item-has-children" : ""}`}>
            {!hasDropdown || lvl1Children.length === 0 ? (
              <Link
                href={item.url}
                className={`nav-link-item drop-trigger ${path === item.url ? "ui-nav-active" : ""}`}
              >
                {item.label}
              </Link>
            ) : (
              <>
                <a
                  className={`nav-link-item drop-trigger ${
                    isParentActive(item, path) ? "ui-nav-active" : ""
                  }`}
                >
                  {item.label}
                  <i className="fas fa-angle-down" />
                </a>

                {/* render submenu only if anything left after filtering */}
                {lvl1Children.length > 0 && (
                  <div className="sub-menu" id={`submenu-${i}`}>
                    <ul className="sub-menu_list">
                      {lvl1Children.map((item2, i2) => {
                        const hasChild = !!item2?.dropdown?.length;
                        const lvl2Children = hasChild ? applyRules(item2.label, item2.dropdown) : [];

                        return !hasChild ? (
                          <li key={i2} className="sub-menu_item">
                            <Link href={item2.url}>
                              <span className={`menu-item-text ${item2.url === path ? "active" : ""}`}>
                                {item2.label}
                              </span>
                            </Link>
                          </li>
                        ) : (
                          <li key={i2} className="sub-menu_item nav-item-has-children child-item">
                            <a className="sub-menu__item-link">
                              <span
                                className={`menu-item-text ${
                                  isParentActive(item2, path) ? "active" : ""
                                }`}
                              >
                                {item2.label}
                              </span>
                              <i className="fas fa-angle-right" />
                            </a>

                            {lvl2Children.length > 0 && (
                              <div className="sub-menu child-sub" id={`submenu-${i2}`}>
                                <ul className="sub-menu_list">
                                  {lvl2Children.map((item3, i3) => (
                                    <li key={i3} className="sub-menu_item">
                                      <Link href={item3.url}>
                                        <span
                                          className={`menu-item-text ${
                                            item3.url === path ? "active" : ""
                                          }`}
                                        >
                                          {item3.label}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}