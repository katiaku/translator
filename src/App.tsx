import { FiCopy } from "react-icons/fi"; 
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
import { useDebounce } from "./hooks/useDebounce";

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

  const debouncedFromText = useDebounce(fromText, 300);

  useEffect(() => {
    if (debouncedFromText === '') return

    // TODO: translate logic
    console.log(debouncedFromText, 'useEffect')
  }, [debouncedFromText, fromLanguage, toLanguage]);

  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  return (
    <Container fluid>
      <div className="d-flex justify-content-center align-items-center mb-4 pb-4">
        <h1 className="custom-font">Translator</h1>
      </div>

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
              <div style={{ position: 'relative' }}>
                <TextArea
                  loading={loading}
                  type={SectionType.To}
                  value={result}
                  onChange={setResult}
                />
                <Button
                  variant="link"
                  style={{ position: 'absolute', right: 0, bottom: 0 }}
                  onClick={handleClipboard}
                >
                  <FiCopy />
                </Button>
              </div>
            </Stack>
          </Col>
      </Row>
    </Container>
  )
}

export default App
