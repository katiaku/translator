import { CgArrowsExchange } from "react-icons/cg"; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants';
import { LanguageSelector } from "./components/LanguageSelector";
import { SectionType } from "./types";
import { TextArea } from "./components/TextArea";
import { useEffect } from "react";

function App() {

  const {
    loading,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useStore();

  useEffect(() => {
    if (fromText === '') return

    // TODO: translate logic
    console.log(fromText, 'useEffect')
  }, [fromText, fromLanguage, toLanguage]);

  return (
    <Container fluid>
      <h1>Translator</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <CgArrowsExchange />
          </Button>
        </Col>

        
          <Col>
            <Stack gap={2}>
              <LanguageSelector
                type={SectionType.To}
                value={toLanguage}
                onChange={setToLanguage}
              />
              <TextArea
                loading={loading}
                type={SectionType.To}
                value={result}
                onChange={setResult}
              />
            </Stack>
          </Col>
      </Row>
    </Container>
  )
}

export default App
