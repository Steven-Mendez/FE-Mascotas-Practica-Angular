import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interfaces/mascota';

const listMascotas: Mascota[] = [
  { nombre: 'Alegría', edad: 3, raza: 'golden', color: 'dorado', peso: 13 },
  { nombre: 'Max', edad: 2, raza: 'labrador', color: 'negro', peso: 25 },
  { nombre: 'Bella', edad: 1, raza: 'poodle', color: 'blanco', peso: 8 },
  { nombre: 'Rocky', edad: 4, raza: 'bulldog', color: 'marrón', peso: 20 },
  { nombre: 'Luna', edad: 5, raza: 'husky', color: 'blanco y negro', peso: 22 },
  {
    nombre: 'Charlie',
    edad: 6,
    raza: 'dálmata',
    color: 'blanco y negro',
    peso: 18,
  },
  {
    nombre: 'Lucas',
    edad: 2,
    raza: 'pastor alemán',
    color: 'negro y marrón',
    peso: 30,
  },
  { nombre: 'Coco', edad: 1, raza: 'chihuahua', color: 'marrón', peso: 3 },
  { nombre: 'Simba', edad: 3, raza: 'persa', color: 'naranja', peso: 5 },
  {
    nombre: 'Gizmo',
    edad: 2,
    raza: 'siamés',
    color: 'blanco y marrón',
    peso: 4,
  },
  {
    nombre: 'Oliver',
    edad: 1,
    raza: 'british shorthair',
    color: 'gris',
    peso: 6,
  },
  {
    nombre: 'Milo',
    edad: 2,
    raza: 'ragdoll',
    color: 'blanco y marrón',
    peso: 7,
  },
  {
    nombre: 'Toby',
    edad: 5,
    raza: 'beagle',
    color: 'marrón y blanco',
    peso: 15,
  },
  { nombre: 'Alegría', edad: 3, raza: 'golden', color: 'dorado', peso: 13 },
  { nombre: 'Max', edad: 2, raza: 'labrador', color: 'negro', peso: 20 },
  { nombre: 'Luna', edad: 1, raza: 'pastor alemán', color: 'marrón', peso: 18 },
  {
    nombre: 'Rocky',
    edad: 5,
    raza: 'bulldog francés',
    color: 'blanco y negro',
    peso: 10,
  },
  { nombre: 'Simba', edad: 4, raza: 'persa', color: 'naranja', peso: 6 },
  {
    nombre: 'Gizmo',
    edad: 2,
    raza: 'siames',
    color: 'blanco y negro',
    peso: 4,
  },
  {
    nombre: 'Toby',
    edad: 6,
    raza: 'beagle',
    color: 'marrón y blanco',
    peso: 15,
  },
  {
    nombre: 'Milo',
    edad: 1,
    raza: 'bulldog inglés',
    color: 'blanco',
    peso: 12,
  },
  { nombre: 'Coco', edad: 8, raza: 'chihuahua', color: 'marrón', peso: 2 },
  {
    nombre: 'Buddy',
    edad: 7,
    raza: 'dálmata',
    color: 'blanco y negro',
    peso: 25,
  },
  {
    nombre: 'Bella',
    edad: 4,
    raza: 'doberman',
    color: 'negro y marrón',
    peso: 30,
  },
  {
    nombre: 'Oliver',
    edad: 3,
    raza: 'shih tzu',
    color: 'blanco y marrón',
    peso: 7,
  },
  {
    nombre: 'Lola',
    edad: 2,
    raza: 'schnauzer',
    color: 'blanco y gris',
    peso: 8,
  },
  {
    nombre: 'Daisy',
    edad: 1,
    raza: 'yorkshire terrier',
    color: 'marrón y negro',
    peso: 3,
  },
  {
    nombre: 'Charlie',
    edad: 5,
    raza: 'husky siberiano',
    color: 'gris y blanco',
    peso: 22,
  },
  { nombre: 'Jack', edad: 4, raza: 'terrier', color: 'marrón', peso: 9 },
  { nombre: 'Maggie', edad: 6, raza: 'boxer', color: 'marrón', peso: 23 },
  {
    nombre: 'Rocky',
    edad: 2,
    raza: 'rottweiler',
    color: 'negro y marrón',
    peso: 28,
  },
  {
    nombre: 'Molly',
    edad: 3,
    raza: 'labrador retriever',
    color: 'marrón',
    peso: 17,
  },
  {
    nombre: 'Ziggy',
    edad: 1,
    raza: 'bulldog francés',
    color: 'crema',
    peso: 8,
  },
  { nombre: 'Sasha', edad: 4, raza: 'pastor belga', color: 'negro', peso: 19 },
];
@Component({
  selector: 'app-lista-mascota',
  templateUrl: './lista-mascota.component.html',
  styleUrls: ['./lista-mascota.component.scss'],
})
export class ListaMascotaComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'nombre',
    'edad',
    'raza',
    'color',
    'peso',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
    this.paginator._intl.nextPageLabel = 'Siguiente página';
    this.paginator._intl.previousPageLabel = 'Página anterior';
    this.paginator._intl.firstPageLabel = 'Primera página';
    this.paginator._intl.lastPageLabel = 'Última página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
