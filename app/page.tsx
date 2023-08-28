import React from 'react';
import { Link } from '@nextui-org/link';
import { title, subtitle } from '@/components/primitives';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { UilJavaScript, UilHtml5, UilReact } from '@iconscout/react-unicons';
import {
  BiLogoJavascript,
  BiLogoAngular,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import { Image } from '@nextui-org/image';
import { Button, ButtonGroup } from '@nextui-org/button';

export default function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Hello&nbsp;</h1>
          <h1 className={title({ color: 'blue' })}>World!&nbsp;</h1>
          <br />
          <h1 className={title()}>- I&apos;m Mauricio Davalos</h1>
          <h2 className={subtitle({ class: 'mt-4' })}>
            Full-Stack Developer & Web Designer
          </h2>
          <div className="flex justify-center">
            <Image
              isZoomed
              width={200}
              alt="NextUI Fruit Image with Zoom"
              src="/FotoMau2.jpeg"
              className="mt-3"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex justify-center">
            <h1 className="text-3xl">About&nbsp;</h1>
            <h1 className="text-3xl text-blue-500">Me&nbsp;</h1>
          </div>
          <p className="text-justify m-1">
            Hi there! My name is Mauricio Dávalos, Elevating the game in tech, I
            thrive on challenges that unleash my full-stack potential.
            Proficient in cutting-edge web technologies, I don&apost just code,
            I engineer seamless digital experiences.
          </p>
        </div>
        <a href="/public/CV Mauricio Davalos.pdf" download>
          <Button color="primary" variant="shadow">
            Download CV
          </Button>
        </a>
      </section>
      <section>
        <div className="flex justify-center">
          <Card className="w-[70vw]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <h2 className="text-center text-xl">My Skills</h2>
              </div>
            </CardHeader>
            <Divider />
            <div className="grid grid-cols-2">
              <CardBody className="flex flex-row">
                <BiLogoJavascript size="2em" color="#FFFF00" />
                <p>JavaScript</p>
              </CardBody>
              <CardBody className="flex flex-row">
                <UilHtml5 size="2em" color="#ff0000" />
                <p>HTML</p>
              </CardBody>
              <CardBody className="flex flex-row">
                <BiLogoTailwindCss size="2em" color="#0000ff" />
                <p>CSS / Tailwind</p>
              </CardBody>
              <CardBody className="flex flex-row">
                <UilReact size="2em" color="#61DAFB" />
                <p>ReactJS</p>
              </CardBody>
              <CardBody className="flex flex-row">
                <UilJavaScript size="2em" color="#008000" />
                <p>NodeJS</p>
              </CardBody>
              <CardBody className="flex flex-row">
                <BiLogoMongodb size="2em" color="#228b22" />
                <p>MongoDB</p>
              </CardBody>
              <CardBody className="flex flex-row">
                <BiLogoTypescript size="2em" color="#1e90ff" />
                <p>TypeScript</p>
              </CardBody>
              <CardBody className="flex flex-row">
                <BiLogoAngular size="2em" color="#ff0000" />
                <p>Angular</p>
              </CardBody>
            </div>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui">
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
