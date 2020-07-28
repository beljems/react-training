import { useMutation } from '@apollo/client';

export default function mutate(query, data) {
    const { data } = useMutation(query, {
        variables: { ...data }
    })
}
