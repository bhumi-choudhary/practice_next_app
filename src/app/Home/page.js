'use client';

import { Box, Heading, Text, Button, Grid, Flex, Strong, Card, Container } from '@radix-ui/themes';
import Image from 'next/image';
import React from 'react';
import hero from '../../../public/hero.jpg';
import { motion } from 'framer-motion';
import { ChartBarIcon, Contact2Icon, LucideEarth, Figma } from 'lucide-react';
import about1 from '../../../public/about-01.jpg';
import about2 from '../../../public/about-02.jpg';
import about3 from '../../../public/about-03.jpg';
import Lottie from 'lottie-react';
import animatebutton from '../../../public/Animation - 1744979222665.json';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const MotionBox = motion(Box);

const features = [
  {
    icon: <Contact2Icon size={60} />,
    title: "Cutting-edge Features",
    text: "Lorem ipsum dolor sit amet conse adipiscing elit.",
    bgColor: "bg-orange-100",
    titleColor: "text-orange-600",
  },
  {
    icon: <LucideEarth size={60} />,
    title: "10+ Useful Integrations",
    text: "Lorem ipsum dolor sit amet conse adipiscing elit.",
    bgColor: "bg-pink-100",
    titleColor: "text-pink-600",
  },
  {
    icon: <Figma size={60} />,
    title: "High-quality Modern Design",
    text: "Lorem ipsum dolor sit amet conse adipiscing elit.",
    bgColor: "bg-green-100",
    titleColor: "text-green-600",
  },
];

const FeatureCard = ({ title, desc, index }) => (
  <MotionBox
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="relative max-w-xs bg-[#f2f8f9] rounded-md p-8 m-3 text-center no-underline overflow-hidden group transition-all duration-300 hover:bg-[#00838d] hover:text-white mx-auto"
  >
    <Box className="absolute z-0 top-[-16px] right-[-16px] h-8 w-8 bg-[#00838d] rounded-full scale-100 origin-center transition-transform duration-300 ease-out group-hover:scale-[21]"></Box>
    <Box className="flex items-center justify-center absolute w-8 h-8 overflow-hidden top-0 right-0 bg-[#00838d] rounded-tr-md rounded-bl-full z-10">
      <span className="text-white -mt-1 -mr-1 font-mono">{'>'}</span>
    </Box>
    <Box align="center" className="relative z-10 flex flex-col items-center">
      <ChartBarIcon size={40} />
      <Text as="p" size="6" weight="medium" mt="4">{title}</Text>
      <Text as="p" mt="3">{desc}</Text>
    </Box>
  </MotionBox>
);

const Page = () => {
  const cardData = [
    { title: "Crafted For Startups", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor." },
    { title: "Tailored For Growth", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor." },
    { title: "Built With Care", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor." },
    { title: "Fully Responsive", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor." },
    { title: "Easy Integration", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor." },
    { title: "Scalable Design", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor." }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex items-center justify-center px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full items-center gap-10">
          <motion.div
            className="space-y-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <Heading as="h1" size="9" weight="bold" className="text-gray-900">
              Next.js SaaS Boilerplate <br /> with Landing Page
            </Heading>
            <Text as="p" mt="5" size="5" className="text-gray-600 leading-relaxed">
              Build and launch your SaaS product faster with this pre-built
              Next.js boilerplate. Comes with a beautiful landing page, clean
              components, and responsive design.
            </Text>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                mt="5"
                size="4"
                radius="full"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                Get Started
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-blue-500">
              <Image
                src={hero}
                alt="Hero image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center px-4 md:px-12 py-10">
        <Grid columns={{ initial: "1", md: "3" }} gap="3">
          {features.map((feature, index) => (
            <MotionBox
              key={index}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`p-6 rounded-2xl shadow-xl ${feature.bgColor}`}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <Heading
                as="h4"
                size="md"
                mt={4}
                className={`font-semibold ${feature.titleColor}`}
              >
                {feature.title}
              </Heading>
              <Text mt={2} className="text-gray-700">
                {feature.text}
              </Text>
            </MotionBox>
          ))}
        </Grid>
      </div>

      {/* About Section */}
      <div className="relative bg-white p-6 md:p-12">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              className="rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image src={about1} alt="Person 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image src={about2} alt="Person 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image src={about3} alt="Person 3" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            className="space-y-8 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 mt-10"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Text weight="regular" as="h3" color="blue" className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose Us
            </Text>
            <Text as="p" className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4">
              We believe in creating experiences that are not only visually stunning but also meaningful...
            </Text>
            <Text as="p" className="text-gray-600 text-lg md:text-xl leading-relaxed">
              With a team of passionate individuals, we built a community that values innovation...
            </Text>
            <Box>
              <Flex align="center" gap={4} className="pt-4">
                <Lottie animationData={animatebutton} loop />
                <Text className="text-gray-800 text-xl text-semibold">See How It Works</Text>
              </Flex>
            </Box>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <Box>
        <Heading as="h4" align="center" mt="9" size="8" weight="regular">
          An Amazing <Strong className="text-blue-600">Next Js</Strong> Boilerplate
        </Heading>
        <Text mb="8" as="p" color="gray" align="center" mt="4">
          With All Essential Integrations - DB, Auth, Payment, Sanity, MDX, and more
        </Text>
      </Box>

      {/* Cards */}
      <Box>
        <Grid align="center" columns="3" gap="3">
          {cardData.slice(0, 3).map((card, index) => (
            <FeatureCard key={index} title={card.title} desc={card.desc} index={index} />
          ))}
        </Grid>
      </Box>

      <Box mt="9">
        <Grid columns="3" gap="3">
          {cardData.slice(3, 6).map((card, index) => (
            <FeatureCard key={index + 3} title={card.title} desc={card.desc} index={index + 3} />
          ))}
        </Grid>
      </Box>
      <Box mb={'8'} className='bg-gray-100'>
        <Box className="bg-white-200 border-r-[50px] border-r-blue-400 relative w-[100px] h-[100px] rounded-full" mt={'9'}>
        </Box>
        <Box>
          <Heading as='h4' weight={'bold'} size={'8'} align={'center'} mt={'9'}>Great Afordable Pricing Plans</Heading>
          <Text as='p' mt={'5'} color='gray' align={'center'} weight={'medium'}>It is a long established fact that a reader will be destrected by the readable content <br /> of a page when looking at its layout. The point of using.</Text>
        </Box>
        <Box >
          <Flex justify={'center'} mt={'7'} >
            <Text as='p' size={'4'} weight={'light'} >Bill Monthly</Text>
            <Box mx={'5'}>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" value="" />
                <div
                  className="group peer bg-white rounded-full duration-300 w-16 h-8 ring-2 ring-red-500 after:duration-300 after:bg-red-500 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"
                ></div>
              </label>
            </Box>
            <Text as='p' size={'4'} weight={'light'}>Bill Anually</Text>
          </Flex>
        </Box>
        <Container mt={'9'}>
          <Grid columns={{ initial: "1", md: "3" }} gap="7">
            <Box mb={'7'} className='flex flex-col items-center p-6 bg-gradient-to-br from-white to-white rounded-xl shadow-xl'>
              <Text as='p' size={'5'} align={'center'} weight={'medium'} color='black'>Starter</Text>
              <Flex justify={'center'} mt={'8'}>
                <Text as='h5' size='8' weight='medium'>$348</Text>
                <Text mt={'2'} mx={'1'} >/per Year</Text>
              </Flex>
              <Text as='p' mt={'3'} weight={'medium'} color='gray' align={'center'} >No Credit Card Required</Text>
              <Box align={'center'} mt={'6'}>
                <button
                  mt="5"
                  size="4"
                  radius="full"
                  className="bg-pink-500 hover:bg-blue-500 text-white px-9 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  Try For Free
                </button>
              </Box>
              <Text align={'center'} mt={'5'} weight={'medium'} color='gray' as='p'>400 GB Storage</Text>
              <Text align={'center'} mt={'4'} weight={'medium'} color='gray' as='p'>Unlimited Photos & sAnd Videos</Text>
              <Text align={'center'} mt={'3'} weight={'medium'} color='gray' as='p'>Exclusive Support</Text>
              <Text align={'center'} mt={'7'} size={'5'} weight={'medium'} color='black' as='p'>7 Day Free Trial</Text>

            </Box>
            <Box mb={'7'} className='flex flex-col items-center p-6 bg-gradient-to-br from-white to-white rounded-xl shadow-xl'>
              <Text as='p' size={'5'} align={'center'} weight={'medium'} color='black'>Starter</Text>
              <Flex justify={'center'} mt={'8'}>
                <Text as='h5' size='8' weight='medium'>$348</Text>
                <Text mt={'2'} mx={'1'} >/per Year</Text>
              </Flex>
              <Text as='p' mt={'3'} weight={'medium'} color='gray' align={'center'} >No Credit Card Required</Text>
              <Box align={'center'} mt={'6'}>
                <button
                  mt="5"
                  size="4"
                  radius="full"
                  className="bg-blue-500 hover:bg-pink-500 text-white px-9 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  Try For Free
                </button>
              </Box>
              <Text align={'center'} mt={'5'} weight={'medium'} color='gray' as='p'>400 GB Storage</Text>
              <Text align={'center'} mt={'4'} weight={'medium'} color='gray' as='p'>Unlimited Photos & sAnd Videos</Text>
              <Text align={'center'} mt={'3'} weight={'medium'} color='gray' as='p'>Exclusive Support</Text>
              <Text align={'center'} mt={'7'} size={'5'} weight={'medium'} color='black' as='p'>7 Day Free Trial</Text>

            </Box>
            <Box mb={'7'} className='flex flex-col items-center p-6 bg-gradient-to-br from-white to-white rounded-xl shadow-xl'>
              <Text as='p' size={'5'} align={'center'} weight={'medium'} color='black'>Starter</Text>
              <Flex justify={'center'} mt={'8'}>
                <Text as='h5' size='8' weight='medium'>$348</Text>
                <Text mt={'2'} mx={'1'} >/per Year</Text>
              </Flex>
              <Text as='p' mt={'3'} weight={'medium'} color='gray' align={'center'} >No Credit Card Required</Text>
              <Box align={'center'} mt={'6'}>
                <button
                  mt="5"
                  size="4"
                  radius="full"
                  className="bg-pink-500 hover:bg-blue-500 text-white px-9 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
                >
                  Try For Free
                </button>
              </Box>
              <Text align={'center'} mt={'5'} weight={'medium'} color='gray' as='p'>400 GB Storage</Text>
              <Text align={'center'} mt={'4'} weight={'medium'} color='gray' as='p'>Unlimited Photos & sAnd Videos</Text>
              <Text align={'center'} mt={'3'} weight={'medium'} color='gray' as='p'>Exclusive Support</Text>
              <Text align={'center'} mt={'7'} size={'5'} weight={'medium'} color='black' as='p'>7 Day Free Trial</Text>

            </Box>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Page;
