import { useQuery } from "@apollo/client/react";
import GET_COUNTRIES from "../graphql/getCountries.graphql";
import {
  Center,
  Spinner,
  Box,
  SimpleGrid,
  Image,
  Flex,
} from "@chakra-ui/react";
import { flagToCountry } from "emoji-flags-to-country";
import "./Country.css";

const Country = () => {
  const { data, error, loading } = useQuery(GET_COUNTRIES);

  // useEffect(() => {
  //   if (data) {
  //     twemoji.parse(document.body);
  //   }
  // }, [data]);

  if (loading)
    return (
      <Center h="70vh">
        <strong>Loading... </strong>
        <Spinner size="lg" />
      </Center>
    );

  if (error) return <p>`Error :( ${error.message}`</p>;

  return (
    <>
      <Box pt={4} pl={4} fontSize='3xl' fontWeight="bold" as="h1">
        Countries with GraphQL
      </Box>
      <SimpleGrid minChildWidth='250px' p={6} spacing="40px">
        {data.countries.map((country) => (
          <Flex
            key={country.name}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            p={4}
            textAlign="center"
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Box
              fontWeight="semibold"
              fontSize='md'
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {country.name}
            </Box>
            <Image
              border="1px"
              borderColor="gray.200"
              m="auto"
              src={`flags/${flagToCountry(country.emoji)?.toLowerCase()}.svg`}
              alt={`${country.emoji}`}
            />
            <Box textAlign="left">
              <Box as="h6" fontWeight="semibold" color="gray.600" fontSize="sm">
                Capital: {country.capital}
              </Box>
              <Box as="h6" fontWeight="semibold" color="gray.600" fontSize="sm">
                Currency: {country.currency}
              </Box>
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Country;
