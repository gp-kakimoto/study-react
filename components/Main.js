import classes from './Main.module.css'
import { Links } from '../components/links'
import { Headline } from '../components/Headline'
export function Main(props) {
  return (
      <main className={classes.main}>
        <Headline 
            page={props.page}
        >
          <code className={classes.code}>page/{props.page}.js</code>
        </Headline>
        <Links />
      </main>
    
  )
}
