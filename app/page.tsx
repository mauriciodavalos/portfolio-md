import React from 'react';
import { Link } from '@nextui-org/link';
import { title, subtitle } from '@/components/primitives';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { UilJavaScript, UilHtml5, UilReact } from '@iconscout/react-unicons';
import {
  BiLogoJavascript,
  BiLogoAws,
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/button';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/popover';

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
          <div className="mt-5">
            <Popover placement="right">
              <PopoverTrigger>
                <Button color="success" variant="shadow">
                  Personal Info
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Age: 31</div>
                  <div className="text-small font-bold">Location: México</div>
                  <div className="text-small font-bold">
                    Email: maudavalos1992@gmail.com
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
            Elevating the game in tech, I thrive on challenges that unleash my
            full-stack potential. Proficient in cutting-edge web technologies, I
            don&apos;t just code, I engineer seamless digital experiences.
          </p>
        </div>
        <div className="flex justify-center mt-1 mb-4">
          <div className="justify-center m-1">
            <div className="grid grid-rows-1 grid-flow-col gap-3">
              <div className="box-content h-[10vp] w-[1vp] p-2 border-3 border-blue-500 text-sm">
                <p className="text-4xl align-middle">5+</p>
                <p>Years Experience</p>
              </div>
              <div className="grid grid-cols-2 gap-2 box-content h-[10vp] p-1 border-3 border-blue-400 text-xs align-middle">
                <p className="align-middle">15+ projects</p>
                <p className="align-middle">10+ Happy Customers</p>
                <p className="align-middle">Best Practices</p>
                <p className="align-middle">Performance Driven</p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1Y0BWP6Xyph27nQQZAD-mKCKz4Uxeb1Gi/view?usp=sharing"
          target="_blank">
          <Button color="primary" variant="shadow">
            Download CV
          </Button>
        </a>
      </section>
      <section className="flex justify-center">
        <div>
          <Card className="max-w-[600px] items-center m-1">
            <CardHeader className="flex gap-3 ">
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
                <BiLogoAws size="2em" color="#FF8C00	" />
                <p>AWS</p>
              </CardBody>
            </div>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/mauriciodavalos">
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div className="flex justify-center">
            <h1 className="text-3xl">Featured&nbsp;</h1>
            <h1 className="text-3xl text-blue-500">Projects&nbsp;</h1>
          </div>
        </div>
        <Projects />
      </section>
    </div>
  );
}

function Projects() {
  return <h1>Hello</h1>;
}
