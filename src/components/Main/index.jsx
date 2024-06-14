import classes from 'src/components/Main/Main.module.css'
import { Links } from 'src/components/links'
import { Headline } from 'src/components/Headline'
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
