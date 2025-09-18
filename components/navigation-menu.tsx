"use client";
import * as React from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ChevronDownIcon, 
  HamburgerMenuIcon,
  XIcon 
} from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink as NavigationMenuLinkPrimitive,
  NavigationMenuList,
  NavigationMenuTrigger,
  type NavigationMenuLinkProps,
} from "@radix-ui/react-navigation-menu";
import { $button, ButtonLink } from "../common/button";
import type { HeaderFragment, HeaderLiksFragment } from "../lib/basehub/fragments";
import { useToggleState } from "../hooks/use-toggle-state";
import { useHasRendered } from "@/hooks/use-has-rendered";

// Glassmorphism utility classes
const glassmorphism = {
  container: "backdrop-blur-xl bg-white/10 dark:bg-black/10",
  border: "border border-white/20 dark:border-black/20",
  shadow: "shadow-lg shadow-black/5 dark:shadow-white/5",
  hover: "hover:bg-white/20 dark:hover:bg-black/20",
  active: "bg-white/30 dark:bg-black/30",
};

// Animation variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.23, 0.86, 0.39, 0.96],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const mobileMenuVariants = {
  hidden: { 
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.23, 0.86, 0.39, 0.96] }
  },
  exit: { 
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

// #region Desktop Navigation
export function DesktopMenu({ navbar, rightCtas }: HeaderFragment) {
  const hasRendered = useHasRendered();

  return (
    <motion.div 
      className="hidden items-center gap-2 lg:flex lg:gap-4"
      variants={staggerContainer}
      initial="hidden"
      animate={hasRendered ? "visible" : "hidden"}
    >
      {/* Main Navigation */}
      <motion.div variants={staggerItem}>
        <NavigationMenu 
          className="relative flex items-center"
          delayDuration={100}
        >
          <NavigationMenuList className="flex items-center gap-1">
            {navbar.items.map((link:any, index:number) => (
              <motion.div key={link._id} variants={staggerItem}>
                {link.sublinks.items.length > 0 ? (
                  <DesktopDropdownItem {...link} index={index} />
                ) : (
                  <DesktopLinkItem {...link} index={index} />
                )}
              </motion.div>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        className="flex items-center gap-2" 
        variants={staggerItem}
      >
        {rightCtas.items.map((cta:any, index:number) => (
          <motion.div key={cta._id} variants={staggerItem}>
            <ButtonLink
              href={cta.href}
              intent={cta.type}
              className={clsx(
                "relative h-10 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                glassmorphism.container,
                glassmorphism.border,
                glassmorphism.shadow,
                "text-white hover:scale-105",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              )}
            >
              <span className="relative z-10">{cta.label}</span>
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 via-white/10 to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  originX: 0,
                }}
              />
            </ButtonLink>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function DesktopLinkItem({ _title, href }: HeaderLiksFragment) {
  return (
    <NavigationMenuItem>
      <Link href={href ?? "#"}>
        <motion.div
          variants={staggerItem}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={clsx(
            "relative inline-flex h-10 items-center justify-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300",
            glassmorphism.container,
            glassmorphism.border,
            glassmorphism.shadow,
            "text-white/90",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          )}
        >
          <span className="relative z-10">{_title}</span>
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </NavigationMenuItem>
  );
}

function DesktopDropdownItem({ 
  _title, 
  href, 
  sublinks 
}: HeaderLiksFragment) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavigationMenuItem className="relative">
      <NavigationMenuTrigger
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={clsx(
          "group relative inline-flex h-10 items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300",
          glassmorphism.container,
          glassmorphism.border,
          glassmorphism.shadow,
          "text-white/90",
          "hover:scale-105",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          isOpen && glassmorphism.active
        )}
      >
        <span className="relative z-10">{_title}</span>
        <motion.div
          className="relative z-10"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="h-4 w-4 text-white/60 group-hover:text-white/80" />
        </motion.div>
      </NavigationMenuTrigger>

      <AnimatePresence>
        {isOpen && (
          <NavigationMenuContent
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={clsx(
              "absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 mt-2 w-[280px] max-w-[90vw] rounded-2xl p-4",
              glassmorphism.container,
              glassmorphism.border,
              glassmorphism.shadow,
              "bg-white/90 dark:bg-black/90",
              "shadow-2xl shadow-black/10 dark:shadow-white/10"
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="space-y-2"
            >
              {sublinks.items.map((sublink:any) => {
                const { href, _title } = getLinkData(sublink);
                
                return (
                  <motion.div
                    key={sublink._id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={href}>
                      <NavigationMenuLinkPrimitive
                        className={clsx(
                          "group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300",
                          "text-white/80",
                          glassmorphism.hover,
                          "hover:pl-4 hover:shadow-md hover:shadow-white/10",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                        )}
                      >
                        <span className="relative z-10 flex-1">{_title}</span>
                        <motion.div
                          className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-0"
                          initial={{ width: 0 }}
                          whileHover={{ width: 3 }}
                          transition={{ duration: 0.3 }}
                        />
                      </NavigationMenuLinkPrimitive>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </NavigationMenuContent>
        )}
      </AnimatePresence>
    </NavigationMenuItem>
  );
}

// #region Mobile Navigation
export function MobileMenu({ navbar, rightCtas }: HeaderFragment) {
  const { handleToggle, isOn, handleOff } = useToggleState();
  const hasRendered = useHasRendered();

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        aria-label="Toggle Menu"
        className={clsx(
          "relative flex h-10 w-10 items-center justify-center rounded-xl",
          glassmorphism.container,
          glassmorphism.border,
          glassmorphism.shadow,
          "text-white/80",
          glassmorphism.hover,
          "hover:scale-110 transition-all duration-300",
          "lg:hidden"
        )}
        onClick={handleToggle}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        <AnimatePresence mode="wait">
          {isOn ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 180, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <XIcon className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="hamburger"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HamburgerMenuIcon className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOn && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={handleOff}
            />
            
            <motion.div
              className={clsx(
                "fixed right-0 top-0 z-50 h-full w-full max-w-sm",
                glassmorphism.container,
                "bg-white/95 dark:bg-black/95",
                "lg:hidden"
              )}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Mobile Menu Header */}
              <div className="sticky top-0 flex h-16 items-center justify-between border-b border-white/20 dark:border-black/20 px-6">
                <motion.h2 
                  className="text-lg font-semibold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Menu
                </motion.h2>
                <motion.button
                  onClick={handleOff}
                  className={clsx(
                    "flex h-8 w-8 items-center justify-center rounded-full text-white/60",
                    glassmorphism.hover,
                    "transition-colors duration-200"
                  )}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <XIcon className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Mobile Menu Content */}
              <motion.div
                className="flex flex-col gap-0.5 p-6 pt-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <nav className="space-y-1">
                  {navbar.items.map((link:any, index:number) => (
                    <motion.div key={link._id} variants={staggerItem}>
                      {link.sublinks.items.length > 0 ? (
                        <MobileDropdownItem 
                          link={link} 
                          index={index} 
                          onClick={handleOff} 
                        />
                      ) : (
                        <MobileLinkItem 
                          href={link.href ?? "#"}
                          title={link._title}
                          index={index}
                          onClick={handleOff}
                        />
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                {hasRendered && (
                  <motion.div
                    className="mt-8 flex flex-col gap-3 pt-8 border-t border-white/20 dark:border-black/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {rightCtas.items.map((cta:any, index:number) => (
                      <motion.div key={cta._id} variants={staggerItem}>
                        <ButtonLink
                          href={cta.href}
                          intent={cta.type}
                          size="lg"
                          className={clsx(
                            "h-12 rounded-xl text-base font-semibold transition-all duration-300",
                            "bg-gradient-to-r from-white/90 to-white/70 dark:from-black/90 dark:to-black/70",
                            "text-black dark:text-white",
                            "hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                          )}
                          onClick={handleOff}
                        >
                          {cta.label}
                        </ButtonLink>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileLinkItem({
  href,
  title,
  index,
  onClick,
}: {
  href: string;
  title: string;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
    >
      <Link
        href={href}
        className={clsx(
          "group relative flex h-12 items-center rounded-xl px-4 text-base font-medium text-white/90 transition-all duration-300",
          glassmorphism.container,
          glassmorphism.border,
          "hover:pl-6 hover:shadow-md hover:shadow-white/10",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        )}
        onClick={onClick}
      >
        <span className="relative z-10">{title}</span>
        <motion.div
          className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-0"
          initial={{ width: 0 }}
          whileHover={{ width: 3 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
}

function MobileDropdownItem({
  link,
  index,
  onClick,
}: {
  link: HeaderLiksFragment;
  index: number;
  onClick: () => void;
}) {
  const { isOn, handleToggle } = useToggleState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
    >
      <button
        onClick={handleToggle}
        className={clsx(
          "group relative flex w-full h-12 items-center justify-between rounded-xl px-4 text-base font-medium text-white/90 transition-all duration-300",
          glassmorphism.container,
          glassmorphism.border,
          glassmorphism.hover
        )}
      >
        <span className="relative z-10">{link._title}</span>
        <motion.div
          className="h-4 w-4 text-white/60 group-hover:text-white/80"
          animate={{ rotate: isOn ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOn && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-2 space-y-1">
              {link.sublinks.items.map((sublink:any) => {
                const { href, _title } = getLinkData(sublink);
                
                return (
                  <Link
                    key={sublink._id}
                    href={href}
                    className={clsx(
                      "group relative flex h-10 items-center rounded-lg px-3 text-sm font-medium text-white/80 transition-all duration-300",
                      glassmorphism.container,
                      "hover:pl-4 hover:text-white hover:shadow-md hover:shadow-white/10",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    )}
                    onClick={onClick}
                  >
                    <span className="relative z-10">{_title}</span>
                    <motion.div
                      className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-0"
                      initial={{ width: 0 }}
                      whileHover={{ width: 2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// #region Utility Functions
function getLinkData(sublink: any) {
  if (sublink.link.__typename === "PageReferenceComponent") {
    return {
      href: sublink.link.page.pathname,
      _title: sublink.link.page._title,
    };
  }
  
  return {
    href: sublink.link.text,
    _title: sublink._title,
  };
}

function NavigationMenuLink({
  className,
  children,
  href,
  ...props
}: { children: React.ReactNode; href: string } & NavigationMenuLinkProps) {
  return (
    <Link href={href}>
      <NavigationMenuLinkPrimitive
        className={clsx("block select-auto", className)}
        {...props}
      >
        {children}
      </NavigationMenuLinkPrimitive>
    </Link>
  );
}

// #region Export
export { NavigationMenuLink };