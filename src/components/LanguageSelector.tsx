import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'
import { type FC } from 'react'
import { type FromLanguage, SectionType, type Language } from '../types'

type Props =
    | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void}
    | { type: SectionType.To, value: Language, onChange: (language: Language) => void}

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return (
        <Form.Select
            aria-label='Choose a language'
            onChange={handleChange}
            value={value}
        >
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detect language</option>}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option
                    value={key}
                    key={key}
                >
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}
