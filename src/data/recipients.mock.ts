export type Recipient = {
    id: string;
    firstName: string; 
    lastName: string;
    birthDate: string;
    deathDate: string;
    city: string;
    funeralHome: string;
}

export const MOCK_RECIPIENTS: Recipient[] = [
    {
    id: "1",
    firstName: "Test",
    lastName: "Testsson",
    birthDate: "1990-01-21",
    deathDate: "2025-11-02",
    city: "Umeå",
    funeralHome: "Alen Begravningsbyrå",
  },
  {
    id: "2",
    firstName: "Maria",
    lastName: "Berglund",
    birthDate: "1958-03-12",
    deathDate: "2024-10-01",
    city: "Stockholm",
    funeralHome: "Lilla Essingen Begravning",
  },
  {
    id: "3",
    firstName: "Olof",
    lastName: "Lindström",
    birthDate: "1943-07-08",
    deathDate: "2025-01-15",
    city: "Göteborg",
    funeralHome: "Göteborgs Begravningsbyrå",
  },
  {
    id: "4",
    firstName: "Karin",
    lastName: "Holm",
    birthDate: "1982-11-30",
    deathDate: "2025-05-17",
    city: "Lund",
    funeralHome: "Sydkustens Begravningar",
  },
  {
    id: "5",
    firstName: "Erik",
    lastName: "Dahl",
    birthDate: "1975-04-22",
    deathDate: "2025-08-09",
    city: "Örebro",
    funeralHome: "Svea Begravningsbyrå",
  },
  {
    id: "6",
    firstName: "Sofia",
    lastName: "Nyström",
    birthDate: "1999-02-04",
    deathDate: "2025-03-28",
    city: "Uppsala",
    funeralHome: "Norra Upplands Ceremonier",
  },
  {
    id: "7",
    firstName: "Gunnar",
    lastName: "Persson",
    birthDate: "1950-09-19",
    deathDate: "2025-07-03",
    city: "Sundsvall",
    funeralHome: "Medelpads Begravningsbyrå",
  },
  {
    id: "8",
    firstName: "Helena",
    lastName: "Wall",
    birthDate: "1966-12-14",
    deathDate: "2025-11-22",
    city: "Västerås",
    funeralHome: "Mellanbygdens Begravning",
  },
  {
    id: "9",
    firstName: "Johan",
    lastName: "Söder",
    birthDate: "1988-06-05",
    deathDate: "2025-02-11",
    city: "Karlstad",
    funeralHome: "Värmlands Ceremonihus",
  },
  {
    id: "10",
    firstName: "Linnea",
    lastName: "Åberg",
    birthDate: "1970-01-02",
    deathDate: "2025-04-30",
    city: "Halmstad",
    funeralHome: "Hallands Begravningscenter",
  },
]