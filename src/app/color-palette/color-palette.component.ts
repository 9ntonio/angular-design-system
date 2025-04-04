import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ColorVariant {
  name: string;
  value: string;
}

interface ColorGroup {
  name: string;
  variants: ColorVariant[];
}

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-palette.component.html',
  styleUrl: './color-palette.component.scss'
})
export class ColorPaletteComponent {
  colorGroups: ColorGroup[] = [
    {
      name: 'primary',
      variants: [
        { name: '100', value: '#EAFAFF' },
        { name: '200', value: '#DCF5FD' },
        { name: '300', value: '#93E4F3' },
        { name: '400', value: '#60D5FB' },
        { name: '500', value: '#30BFEE' },
        { name: '600', value: '#00ACE4' },
        { name: '700', value: '#008fbe' },
        { name: '800', value: '#007398' },
        { name: '900', value: '#005672' },
        { name: '1000', value: '#00394C' },
        { name: '1100', value: '#001D26' },
      ]
    },
    {
      name: 'secondary',
      variants: [
        { name: '100', value: '#d9d9de' },
        { name: '200', value: '#b3b3be' },
        { name: '300', value: '#8d8d9e' },
        { name: '400', value: '#67677d' },
        { name: '500', value: '#41415d' },
        { name: '600', value: '#1b1b3c' },
        { name: '700', value: '#171732' },
        { name: '800', value: '#121228' },
        { name: '900', value: '#0E0E1E' },
        { name: '1000', value: '#090914' },
        { name: '1100', value: '#05050a' },
      ]
    },
    {
      name: 'grey',
      variants: [
        { name: '100', value: '#F7F8F9' },
        { name: '200', value: '#F0F1F3' },
        { name: '300', value: '#E3E4E6' },
        { name: '400', value: '#CACBCD' },
        { name: '500', value: '#A7A9AB' },
        { name: '600', value: '#797979' },
        { name: '700', value: '#5E5E5E' },
        { name: '800', value: '#4E4E4E' },
        { name: '900', value: '#3F3F3F' },
        { name: '1000', value: '#2F2F2F' },
        { name: '1100', value: '#1F1F1F' },
      ]
    },
    {
      name: 'blue',
      variants: [
        { name: '100', value: '#F0F8FF' },
        { name: '200', value: '#aad0f6' },
        { name: '300', value: '#80b9f2' },
        { name: '400', value: '#55a2ed' },
        { name: '500', value: '#2B8AE9' },
        { name: '600', value: '#0073e4' },
        { name: '700', value: '#0060be' },
        { name: '800', value: '#004d98' },
        { name: '900', value: '#003a72' },
        { name: '1000', value: '#00264c' },
        { name: '1100', value: '#001326' },
      ]
    },
    {
      name: 'mint',
      variants: [
        { name: '100', value: '#e1fbfb' },
        { name: '200', value: '#c4f7f6' },
        { name: '300', value: '#a6f3f2' },
        { name: '400', value: '#88efed' },
        { name: '500', value: '#6bebe9' },
        { name: '600', value: '#4DE7E4' },
        { name: '700', value: '#40c1be' },
        { name: '800', value: '#339a98' },
        { name: '900', value: '#277472' },
        { name: '1000', value: '#1a4d4c' },
        { name: '1100', value: '#0d2726' },
      ]
    },
    {
      name: 'green',
      variants: [
        { name: '100', value: '#DEF7EC' },
        { name: '200', value: '#BCF0DA' },
        { name: '300', value: '#84E1BC' },
        { name: '400', value: '#31C48D' },
        { name: '500', value: '#0E9F6E' },
        { name: '600', value: '#057A55' },
        { name: '700', value: '#046647' },
        { name: '800', value: '#035139' },
        { name: '900', value: '#033d2b' },
        { name: '1000', value: '#02291c' },
        { name: '1100', value: '#01140e' },
      ]
    },
    {
      name: 'indigo',
      variants: [
        { name: '100', value: '#e6e6fd' },
        { name: '200', value: '#ccccfb' },
        { name: '300', value: '#b3b3f9' },
        { name: '400', value: '#9a99f7' },
        { name: '500', value: '#8080f5' },
        { name: '600', value: '#6766F3' },
        { name: '700', value: '#5655cb' },
        { name: '800', value: '#4544a2' },
        { name: '900', value: '#34337a' },
        { name: '1000', value: '#222251' },
        { name: '1100', value: '#111129' },
      ]
    },
    {
      name: 'purple',
      variants: [
        { name: '100', value: '#f5e6fc' },
        { name: '200', value: '#ebcefa' },
        { name: '300', value: '#e2b5f7' },
        { name: '400', value: '#d89cf4' },
        { name: '500', value: '#ce84f2' },
        { name: '600', value: '#C46BEF' },
        { name: '700', value: '#a359c7' },
        { name: '800', value: '#83479f' },
        { name: '900', value: '#623678' },
        { name: '1000', value: '#412450' },
        { name: '1100', value: '#211228' },
      ]
    },
    {
      name: 'pink',
      variants: [
        { name: '100', value: '#fbdde3' },
        { name: '200', value: '#f7bcc8' },
        { name: '300', value: '#f39bac' },
        { name: '400', value: '#ee7990' },
        { name: '500', value: '#ea5875' },
        { name: '600', value: '#E63659' },
        { name: '700', value: '#c02d4a' },
        { name: '800', value: '#99243b' },
        { name: '900', value: '#731b2d' },
        { name: '1000', value: '#4d121e' },
        { name: '1100', value: '#26090f' },
      ]
    },
    {
      name: 'yellow',
      variants: [
        { name: '100', value: '#fef7db' },
        { name: '200', value: '#fceeb6' },
        { name: '300', value: '#fbe692' },
        { name: '400', value: '#f9dd6e' },
        { name: '500', value: '#f8d549' },
        { name: '600', value: '#F6CC25' },
        { name: '700', value: '#cdaa1f' },
        { name: '800', value: '#a48819' },
        { name: '900', value: '#7b6613' },
        { name: '1000', value: '#52440c' },
        { name: '1100', value: '#292206' },
      ]
    },
    {
      name: 'orange',
      variants: [
        { name: '100', value: '#FEF0C7' },
        { name: '200', value: '#FEDF89' },
        { name: '300', value: '#FEC84B' },
        { name: '400', value: '#FDB022' },
        { name: '500', value: '#F79009' },
        { name: '600', value: '#DC6803' },
        { name: '700', value: '#b75703' },
        { name: '800', value: '#934502' },
        { name: '900', value: '#6e3402' },
        { name: '1000', value: '#492301' },
        { name: '1100', value: '#251101' },
      ]
    },
    {
      name: 'red',
      variants: [
        { name: '100', value: '#FDE8E8' },
        { name: '200', value: '#FBD5D5' },
        { name: '300', value: '#F8B4B4' },
        { name: '400', value: '#F98080' },
        { name: '500', value: '#F05252' },
        { name: '600', value: '#E02424' },
        { name: '700', value: '#bb1e1e' },
        { name: '800', value: '#951818' },
        { name: '900', value: '#701212' },
        { name: '1000', value: '#4B0C0C' },
        { name: '1100', value: '#250606' },
      ]
    }
  ];

  getContrastColor(hexColor: string): string {
    // Remove the hash character if present
    hexColor = hexColor.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return black for bright colors, white for dark colors
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  }
}
