import master_thesis from '../assets/master2.pdf'
import blockchain from "../assets/blockchain.webp"
export const researchAreas = [
  {
    id: 'cybersecurity',
    number: '01',
    title: 'Cybersecurity',
    description:
      'Cryptography, network security, privacy, secure systems, and ethical security testing.',
    topics: ['Cryptography', 'Network Security', 'Privacy', 'Secure Systems'],
  },
  {
    id: 'software-engineering',
    number: '02',
    title: 'Software Engineering',
    description:
      'Software architecture, algorithms, testing, design patterns, and distributed systems.',
    topics: ['Architecture', 'Algorithms', 'Testing', 'Distributed Systems'],
  },
  {
    id: 'data-science',
    number: '03',
    title: 'Data Science & AI',
    description:
      'Statistics, optimization, machine learning, data analysis, and intelligent systems.',
    topics: ['Statistics', 'Machine Learning', 'Optimization', 'Data Analysis'],
  },
];

/*
  HOW TO ADD A DOCUMENT
  - file:  the PDF.   Put it in public/research/ and write '/research/name.pdf'
                      (leave '' until the PDF is ready)
  - image: the preview. Put it in public/research/ and write '/research/name.jpg'
                      (.png and .webp also work, or use a full https:// link)
*/

export const researchDocuments = [
{
  id: 'master-thesis-ma-abe-iot',
  title: 'Master’s Thesis: Secure IoT Data Sharing Using MA-ABE',
  area: 'cybersecurity',
  type: 'PDF',
  description:
    'Master’s thesis on secure IoT data sharing using Multi-Authority Attribute-Based Encryption (MA-ABE). The system combines cryptographic access control, AES encryption, fog computing, cloud storage, and Ethereum smart contracts to protect sensitive IoT data and support decentralized key management. The implementation and simulation involve Python, C, Contiki-NG, and Cooja.',
  date: '2026-10-20',
  file: master_thesis,
  image:blockchain,
  tags: [
    'MA-ABE Encryption',
    'IoT Security',
    'Python',
    'C',
    'Cooja',
    'Contiki-NG',
    'AES',
    'Ethereum',
    'Fog Computing',
  ],
},
 
];