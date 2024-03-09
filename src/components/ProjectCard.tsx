import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type propsType={
    title:string
    description:string
    github:string
    liveUrl:string
    logo:string
    image:string
}
export const ProjectCard:React.FC<propsType> = ({
    title,
    description,
    github,
    liveUrl,
    logo,
    image
})=><>
 <CardContainer>
      <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-slate-500/[0.1] bg-slate-900 border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <div className="flex gap-x-2 w-full items-center">
            <CardItem translateZ={"20"}>
        <Image
            src={logo}
            height="35"
            width="35"
            className="rounded-full"
            alt="Logo"
            />
            </CardItem>
          <div>
        <CardItem
          translateZ="30"
          className="text-xl font-bold t text-white"
          as={"h2"}
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="30"
          className=" text-sm max-w-sm mt-1 text-neutral-300"
        >
          {description}
        </CardItem>
        </div>
        </div>
        <CardItem translateZ="30" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="aspect-video w-full rounded-md group-hover/card:shadow-xl"
            alt="Demo Image"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="div"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="scale-[2]"/>
            </a>      
          </CardItem>
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            View Live
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
</>