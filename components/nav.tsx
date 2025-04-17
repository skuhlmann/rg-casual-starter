"use client";

import Link from "next/link";
import { Shrimp } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Nav() {
  return (
    <div className="flex flex-row flex-wrap justify-between w-full px-3 py-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <div className="flex items-center justify-center">
              <Link href="/" className={navigationMenuTriggerStyle()}>
                <Shrimp className="h-6 w-6" />
              </Link>
              <h1 className="text-lg">Casual Friday</h1>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ConnectButton
        label="connect"
        accountStatus="avatar"
        chainStatus="icon"
      />
    </div>
  );
}
