export type LibConfig = {
  companyName: string
  api_url?: string
  intercomId?: string
  phoneNumber?: string
  docUrl?: string
  info?: {
    hours?: string
    address?: string
    email?: string
    map?: string
  }
}

export const DefaultConfig: LibConfig = {
  companyName: 'Solodev',
  api_url: 'https://cms.solodev.net/admin/api/',
  intercomId: 'w9bapbgh',
  phoneNumber: '(800) 859-7656',
  docUrl: 'https://cms.solodev.net/',
  info: {
    hours: 'M - F, 8AM - 6PM EDT',
    email: 'help@solodev.com',
    address: '800 N Magnolia Ave. Orlando, FL 32803',
    map: "https://goo.gl/maps/A7F2BNb9oZmYVwkeA",
  }
}