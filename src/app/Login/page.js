import { Box, Button, Card, Flex, Heading, Text, TextField } from '@radix-ui/themes';
import React from 'react';

const page = () => {
    return (
        <Flex
            align="center"
            justify="center"
            height="100vh"
            style={{
                // background: 'linear-gradient(135deg, #f6f8fa, #e3e7ec)',
            }}
        >
            <Box width="100%" maxWidth="400px" px="4">
                <Card
                    size="4"
                    variant="classic"
                    style={{
                        boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                        borderRadius: '16px',
                        padding: '32px',
                    }}
                >
                    <Flex direction="column" gap="5">
                        <Heading
                            size="6"
                            align="center"
                            style={{
                                color: '#2c3e50',
                                marginBottom: '8px',
                            }}
                        >
                            Welcome Back 👋
                        </Heading>
                        <Text align="center" size="2" color="gray">
                            Please sign in to your account
                        </Text>

                        <Box>
                            <Text as="label" size="2" htmlFor="email" display="block" mb="2">
                                Email
                            </Text>
                            <TextField.Root
                                id="email"
                                placeholder="Enter your email"
                                style={{
                                    borderRadius: '12px',
                                    padding: '10px',
                                }}
                            />
                        </Box>

                        <Box>
                            <Text as="label" size="2" htmlFor="password" display="block" mb="2">
                                Password
                            </Text>
                            <TextField.Root
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                style={{
                                    borderRadius: '12px',
                                    padding: '10px',
                                }}
                            />
                        </Box>

                        <Button
                            size="3"
                            style={{
                                marginTop: '10px',
                                borderRadius: '12px',
                                background: '#6366f1',
                                color: '#fff',
                                fontWeight: 500,
                            }}
                            highContrast
                        >
                            Login
                        </Button>
                    </Flex>
                </Card>
            </Box>
        </Flex>
    );
};

export default page;
