export interface DataProps {
  data: {
    name: string;
    id: string;
    userid: string;
    amount: number;
    date: Date;
    categoryid: string;
    created_at: Date;
    category: {
      name: string;
      id: string;
      created_at: Date;
      color: string | null;
    };
  }[];
}
