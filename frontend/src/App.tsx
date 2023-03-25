import { useState } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  FormLabel,
  Text,
  Textarea,
  Center,
  Select,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import Footer from "./Footer";
function App() {
  const [prompt, setPromt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [fontFamily, setFontFamily] = useState<string>("Arial");

  const handleFontFamilyChange = (event: any) => {
    setFontFamily(event.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const providedText = prompt.concat(
      " " + "Correct Grammar of the provided Text"
    );
    // console.log(prompt.concat(" " + "Correct Grammar of the provided Text"));
    axios
      .post("http://localhost:8080/chat", { prompt: providedText })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Heading as="h1" fontWeight={400} margin="auto">
        Grammar Checker Integrated with ChatGPT
      </Heading>
      <Center marginTop={2}>
        <Select
          width="25%"
          placeholder="Select option"
          value={fontFamily}
          onChange={handleFontFamilyChange}
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
        </Select>
      </Center>
      <FormControl minH="40vh" p={1} width="70%" margin="auto">
        <FormLabel margin="auto" textAlign="center" fontSize="xl" marginTop={3}>
          Type Text and Check its Correctness
          <Textarea
            marginTop={1}
            onChange={(e) => setPromt(e.target.value)}
            size="md"
            noOfLines={5}
            resize="vertical"
            maxLength={250}
            color={"teal.700"}
            fontWeight={600}
            variant="flushed"
            focusBorderColor="pink.700"
            placeholder="Type your text or paste it (Ctrl+V). Limit is 250 Words"
          />
        </FormLabel>
        <Button type="submit" onClick={handleSubmit} marginTop={2}>
          Submit
        </Button>
      </FormControl>
      <Center minH="35vh" fontFamily={fontFamily} p={3}>
        <Text margin="auto" fontSize={"md"} color={"teal.700"} fontWeight={600}>
          {response}
        </Text>
      </Center>
      <Footer />
    </div>
  );
}

export default App;
