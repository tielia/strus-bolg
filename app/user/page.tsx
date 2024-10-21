"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button, Listbox, ListboxItem, Spacer } from "@nextui-org/react";

import { IconWrapper } from "./components/IconWrapper";
import { ItemCounter } from "./components/ItemCounter";
import { BugIcon } from "./components/BugIcon";
import { PullRequestIcon } from "./components/PullRequestIcon";
import { ChatIcon } from "./components/ChatIcon";
// import {PlayCircleIcon} from "./components/PlayCircleIcon";
// import {LayoutIcon} from "./components/LayoutIcon";
// import {TagIcon} from "./components/TagIcon";
// import {UsersIcon} from "./components/UsersIcon";
// import {WatchersIcon} from "./WatchersIcon";
// import {BookIcon} from "./components/BookIcon";
import { ChevronRightIcon } from "./components/ChevronRightIcon";
export default function UserPage() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <div>
      <Card className="p-2">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
              <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
            </div>
          </div>
          <Button
            className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
            color="primary"
            radius="full"
            size="sm"
            variant={isFollowed ? "bordered" : "solid"}
            onPress={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
            Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
          </p>
          <span className="pt-2">
            #FrontendWithZoey
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
      <Spacer y={4} />
      <Listbox
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
        itemClasses={{
          base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        <ListboxItem
          key="issues"
          endContent={<ItemCounter number={13} />}
          startContent={
            <IconWrapper className="bg-success/10 text-success">
              <BugIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Issues
        </ListboxItem>
        <ListboxItem
          key="pull_requests"
          endContent={<ItemCounter number={6} />}
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <PullRequestIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Pull Requests
        </ListboxItem>
        <ListboxItem
          key="discussions"
          endContent={<ItemCounter number={293} />}
          startContent={
            <IconWrapper className="bg-secondary/10 text-secondary">
              <ChatIcon className="text-lg " />
            </IconWrapper>
          }
        >
          Discussions
        </ListboxItem>

      </Listbox>
    </div>
  );
}