import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
// #Localization(start)
import { useContext } from 'react'
import LocaleContext from 'insulo-locale-provider';
// #Localization(stop)

const Page = ({title, title_id}:({title:string, title_id?: undefined} | { title?:undefined, title_id:string } | 
  { title:string, title_id:string })) => {
  const render = () => {
    return (
    <Fragment>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> 
    </Fragment>
    );
  }

  let title_cnv = title;

  // #Localization(start)
  const { value: localeConfig } = useContext(LocaleContext);

  if (title_id && localeConfig.currentLocale && typeof localeConfig.locales == 'object' && 
    typeof localeConfig.locales[localeConfig.currentLocale] == 'object') {
    title_cnv = localeConfig.locales[localeConfig.currentLocale][title_id];
  }
  // #Localization(stop)

  return (
    <section>
      <h1>{title_cnv}</h1>
      {render()}
    </section>
  )
}

export default Page