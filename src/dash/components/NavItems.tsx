import { Box, ButtonBase, SvgIcon } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";


export const SideNavItem = (props: any) => {

  const [open, setopen] = useState(false)
  const navigate = useNavigate()
  const { active, disabled, icon, path, title,  marginTop = 0, pages } = props;
  const { pathname } = useLocation();

  console.log( pathname )
  //onClick={ !sesion ? ()=>navigate(path) : ()=>cerrarSesion() }


  const setOpneJ = () => {
    setopen(!open)

  }


  return (
    <li>
      <ButtonBase
        onClick={pages.length === 0 ? () => navigate(path) : () => setOpneJ()}
        sx={{
          marginTop: marginTop,
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          pl: '16px',
          pr: '16px',
          py: '6px',
          textAlign: 'left',
          width: '100%',
          ...(active  && {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }),
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }
        }}

      >
        {icon && (
          <Box

            component="span"
            sx={{
              alignItems: 'center',
              color: '#9da4ae',
              display: 'inline-flex',
              justifyContent: 'center',
              mr: 2,
              ...(active && {
                color: '#ffffff'
              })
            }}
          >
            {icon}
          </Box>
        )}
        <Box

          component="span"
          sx={{
            color: '#9da4ae',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(active && {
              color: 'common.white'
            }),
            ...(disabled && {
              color: 'neutral.500'
            })
          }}
        >
          {title}
        </Box>
        {pages.length != 0

          ?
          <Box

            component="span"
            sx={{
              alignItems: 'center',
              color: '#9da4ae',
              display: 'inline-flex',
              justifyContent: 'center',
              ml: 2,
              ...(active && {
                color: '#f58d42'
              })
            }}
          >

            <SvgIcon sx={{ fontSize: 15 }} >
              {open ? <ExpandMoreIcon /> : <NavigateNextIcon />}

            </SvgIcon>

          </Box> : null

        }


      </ButtonBase>
      {open ?

        <>

          {
            pages.map((page: any, index: any) => (
              <ButtonBase
                key={index}
                onClick={() => navigate(page.path)}
                sx={{
                  paddingY: 1,
                  paddingX: 4,
                  width: '100%',
                  textAlign: 'left',
                  ...(pathname === page.path && {
                    backgroundColor: 'rgba(255, 255, 255, 0.04)'
                  }),
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.04)'
                  }
                }}

              >
                <Box
                  component="span"
                  sx={{
                    color: '#9da4ae',
                    flexGrow: 1,
                    fontFamily: (theme) => theme.typography.fontFamily,
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: '24px',
                    whiteSpace: 'nowrap',
                    ...( pathname === page.path && {
                      color: 'common.white'
                    }),
                    ...(disabled && {
                      color: 'neutral.500'
                    })
                  }}
                >
                  - {page.name}
                </Box>
              </ButtonBase>
            ))
          }

        </>
        : null

      }

      {/* <Box   padding={2} bgcolor={'red'} >
      <Box
          component="span"
          sx={{
            color: '#9da4ae',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(active && {
              color: 'common.white'
            }),
            ...(disabled && {
              color: 'neutral.500'
            })
          }}
        >
          {title}
        </Box>
      </Box> */}
    </li>
  );

};