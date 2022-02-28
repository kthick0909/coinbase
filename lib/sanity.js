import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'dacdm24e',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skuEdR5xY39hOOtIRYMpIZlzXp8RG0Qj9qFsqXSswB1cAmxAmYFNRHrw5lCl2Ym92sEly8Mtq3Fk29Y8c3B1hjMhzGxReKl4pUvQ5e2mzbZ5jwO5xZhq7R2fY7ypOSwRVBSO9zABeCjestjCSy1vLAFarj2wzcW7OOemcG2oNmHAN59SFamB',
    useCdn: false,
})