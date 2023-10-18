'use client'

import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { Arrow90degDown } from 'react-bootstrap-icons';

 function SideMenu  ()  {
    return (
<SidebarMenu style={{ backgroundColor: 'blue' }}>    
    <SidebarMenu.Nav>
      <SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Icon>
          <Arrow90degDown />
        </SidebarMenu.Nav.Icon>
        <SidebarMenu.Nav.Title>
          {/* Menu item title */}
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Nav.Link>
    </ SidebarMenu.Nav>
    <SidebarMenu.Sub>
          <SidebarMenu.Sub.Collapse>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>
              {/* Submenu item icon */}
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>
              {/* Submenu item title */}
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
      </SidebarMenu.Sub.Collapse>
    </SidebarMenu.Sub>
  <SidebarMenu.Body/>
</SidebarMenu>
)
}

export default SideMenu;