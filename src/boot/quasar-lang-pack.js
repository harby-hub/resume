import { Quasar } from 'quasar'

export default async ( ) => {
  const langIso = 'en' // ... some logic to determine it (use Cookies Plugin?)
  try {
    await import( 'src/lang/' + langIso ) .then( lang => Quasar.lang.set( lang.default ) )
  }
  catch { err => console.log( err ) }
}