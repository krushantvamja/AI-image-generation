import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import styled from  "styled-components";
import Button from "./button";
import TextInput from "./TextInput";
import { AutoAwesome, CreateRounded } from '@mui/icons-material';
import CreatePost from '../pages/CreatePost';

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Actions = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;

const GenerateImage = ({
  createPostLoading,
  setcreatePostLoading,
  generateImageLoading,
  setGenerateImageLoading,
  post,
  setPost,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const generateImage = async () => {
    setGenerateImageLoading(true);
    setError("");
    await GenerateImageFromPrompt({ prompt: post.prompt })
      .then((res) => {
        setPost({
          ...post,
          photo: `data:image/jpeg;base64,${res?.data?.photo}`,
        });
        setGenerateImageLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setGenerateImageLoading(false);
      });
  };
  const createPost = async () => {
    setcreatePostLoading(true);
    setError("");
    await CreatePost(post)
      .then((res) => {
        navigate("/");
        setcreatePostLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setcreatePostLoading(false);
      });
  };

  return (
    <Form>
        <Top>
            <Title>Generate Image with prompt</Title>
            <Desc>Write your prompt accprding to image</Desc>

        </Top>
        <Body>
           <TextInput label="Author" placeholder="Enter your name" name="name" 
           rows="8"
           textArea
           value={post.name}
           handleChange= {(e)=> setPost({...post,prompt: e.target.value})}
           />
           <TextInput label="Prompt" placeholder="Enter Prompt"  />
        </Body>
        <Actions>
            <Button 
            text="Generate image" 
            flex leftIcon={<AutoAwesome/>}
            isLoading={createPostLoading}
            isDisabled={post.name === "" ||post.prompt==="" || post.photo==="" }
            ></Button>
            <Button 

            type="secondary" 
            text="Post image" 
            flex leftIcon={<CreateRounded/>} 
            isLoading={createPostLoading}
            isDisabled={post.name === "" ||post.prompt==="" || post.photo==="" }
            ></Button>
        </Actions>
    </Form>
  )
}

export default GenerateImage;