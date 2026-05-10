import * as fs from 'fs';
import * as path from 'path';

const dir = path.join(process.cwd(), 'src', 'data');
const files = fs.readdirSync(dir).filter(f => f.startsWith('seedLessonsPart') && f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/export const (taiwanLessonsPart\d+): Lesson\[\](\s*=\s*\[\])*\s*=\s*\[/g, 'export const $1: Lesson[] = [');
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Processed ${file}`);
});
